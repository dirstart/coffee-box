// api.ts
const apiUrl = 'https://aigcapi.lkcoffee.com/v1/chat-messages';
const apiKey = 'app-orR6C3Sv2Yj3m38lrOK0jYEX';

interface FetchAIResponseParams {
    userQuestion: string;
    setAnswer: React.Dispatch<React.SetStateAction<string>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const fetchAIResponse = async ({
    userQuestion,
    setAnswer,
    setLoading
}: FetchAIResponseParams): Promise<void> => {
    setLoading(true);
    setAnswer('');

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                inputs: {},
                query: userQuestion,
                response_mode: "streaming",
                user: 'yong.pan01'
            })
        });

        const reader = response.body?.getReader();
        if (!reader) {
            throw new Error("Failed to get response reader.");
        }

        const decoder = new TextDecoder("utf-8");

        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n').filter(line => line.trim());

            for (const line of lines) {
                if (line.startsWith("data: ")) {
                    const jsonString = line.replace("data: ", "").trim();
                    try {
                        const data = JSON.parse(jsonString);

                        if (data.event === "message") {
                            setAnswer((prev) => prev + data.answer);
                        } else if (data.event === "agent_message") {
                            setAnswer((prev) => prev + data.answer);
                        } else if (data.event === "message_file") {
                            console.log("File event:", data.url);
                        } else if (data.event === "message_end") {
                            setLoading(false);
                            return;
                        } else if (data.event === "agent_thought") {
                            console.log("Agent thought:", data.thought);
                        }
                    } catch (error) {
                        console.error("Error parsing JSON chunk:", error);
                    }
                }
            }
        }
        setLoading(false);
    } catch (error) {
        console.error("Error fetching AI response:", error);
        setAnswer("对不起，获取答案时发生错误。");
        setLoading(false);
    }
};

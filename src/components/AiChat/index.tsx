import React, { useState } from 'react';
import { fetchAIResponse } from '../../utils/api';
import './index.css';

const AIChat: React.FC = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim()) {
            fetchAIResponse({
                userQuestion: question,
                setAnswer,
                setLoading
            });
            setQuestion(''); // 清空输入框
        }
    };

    return (
        <div className="chat-container">
            <h2 className="chat-header">打招呼 😊</h2>
            <div className="chat-messages">
                {/* AI Message */}
                <div className="chat-message bot">
                    <div className="avatar">🤖</div>
                    <div className="message-bubble">{answer || "你好！欢迎来这里，请告诉我您的问题！"}</div>
                </div>
                {/* User Message */}
                {question && (
                    <div className="chat-message user">
                        <div className="message-bubble">{question}</div>
                        <div className="avatar">😊</div>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="chat-input-form">
                <input
                    type="text"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="请输入您的问题"
                    disabled={loading}
                    className="chat-input"
                />
                <button type="submit" disabled={loading || !question.trim()} className="chat-submit">
                    {loading ? "正在获取..." : "发送"}
                </button>
            </form>
        </div>
    );
};

export default AIChat;

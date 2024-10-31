import { useState, useCallback } from 'react';
import { UserSelection, CoffeeHistory } from '../types';

export function useSelectionHistory() {
  const [history, setHistory] = useState<CoffeeHistory[]>([]);

  const addSelection = useCallback((selection: UserSelection) => {
    const timestamp = new Date().toISOString();
    setHistory(prev => {
      const currentSession = prev[prev.length - 1];
      if (!currentSession || currentSession.recommendation) {
        // Start new session
        return [...prev, {
          selections: [selection],
          mode: 'text',
          timestamp,
          recommendation: null
        }];
      }
      // Add to current session
      return prev.map((session, idx) => 
        idx === prev.length - 1
          ? { ...session, selections: [...session.selections, selection] }
          : session
      );
    });
  }, []);

  const completeSession = useCallback((recommendation: any, mode: 'text' | 'visual' | 'random') => {
    setHistory(prev => {
      if (!prev.length) return prev;
      return prev.map((session, idx) => 
        idx === prev.length - 1
          ? { ...session, recommendation, mode }
          : session
      );
    });
  }, []);

  return { history, addSelection, completeSession };
}
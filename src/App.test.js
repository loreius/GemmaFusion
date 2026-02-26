// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders GemmaFusion title', () => {
    render(<App />);
    const titleElement = screen.getByText(/GemmaFusion/i);
    expect(titleElement).toBeInTheDocument();
});

# Investment Education Chat Application

A modern, interactive web application designed to educate young people about different forms of investment. The app features a split-pane interface with a chat interface on the left and detailed analysis/results on the right.

## Features

- **Chat Interface**: Interactive chat where users can ask questions about investments
- **Investment Analysis**: Comprehensive information displayed in the right pane including:
  - Detailed descriptions of each investment type
  - Pros and cons of each investment
  - Important considerations before investing
- **Investment Types Covered**:
  - Stocks
  - Bonds
  - Mutual Funds
  - ETFs (Exchange-Traded Funds)
  - Real Estate
  - Cryptocurrency
  - Savings Accounts
  - Retirement Accounts (401k, IRA)

## Getting Started (run locally)

### Prerequisites
- Git
- Python 3 (for the simple local server)

### Quick start
```bash
git clone https://github.com/aryandas2009-cmd/myp5-project.git
cd myp5-project
python3 -m http.server 8000
```
Then open `http://localhost:8000` (or `http://127.0.0.1:8000`) in your browser.

### Alternate: open directly
You can also double-click `index.html` to open it directly, but using the local server avoids CORS and file-path issues if you add APIs later.

## Usage Examples

- "What are the different types of investments?"
- "Tell me about stocks"
- "What are the pros and cons of bonds?"
- "Explain cryptocurrency"
- "Tell me about real estate investing"

## Project Structure

```
myp5-project/
├── index.html      # Main HTML structure
├── styles.css      # Styling and layout
├── app.js          # Application logic and investment data
└── README.md       # Project documentation
```

## Technologies Used

- HTML5
- CSS3 (with modern features like flexbox and gradients)
- Vanilla JavaScript (no frameworks required)

## Browser Compatibility

Works best in modern browsers that support:
- ES6 JavaScript
- CSS Flexbox
- CSS Grid

## Future Enhancements

Potential improvements could include:
- Backend integration for more dynamic responses
- User authentication and saved conversations
- More investment types and detailed information
- Interactive calculators (ROI, compound interest, etc.)
- Visual charts and graphs
- Multi-language support

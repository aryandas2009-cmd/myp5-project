// Investment Knowledge Base
const investmentData = {
    stocks: {
        icon: "📈",
        title: "Stocks",
        description: "Stocks represent ownership shares in a company. When you buy a stock, you become a partial owner of that company and can benefit from its growth and profits.",
        pros: [
            "Potential for high returns over the long term",
            "Liquidity - stocks can be bought and sold easily",
            "Ownership stake in companies",
            "Dividend income potential",
            "Diversification across sectors and industries"
        ],
        cons: [
            "High volatility - prices can fluctuate significantly",
            "Risk of losing your entire investment",
            "Requires research and monitoring",
            "Emotional stress during market downturns",
            "No guaranteed returns"
        ],
        considerations: [
            "Research the company's financial health and business model",
            "Understand the industry and market conditions",
            "Diversify across different stocks and sectors",
            "Consider your risk tolerance and investment timeline",
            "Be aware of fees and commissions",
            "Don't invest more than you can afford to lose",
            "Consider using dollar-cost averaging to reduce risk"
        ]
    },
    bonds: {
        icon: "💼",
        title: "Bonds",
        description: "Bonds are debt securities where you lend money to a government or corporation for a fixed period at a fixed interest rate. You receive regular interest payments and get your principal back at maturity.",
        pros: [
            "More stable and predictable returns than stocks",
            "Regular interest income payments",
            "Lower risk than stocks",
            "Diversification for your portfolio",
            "Government bonds are generally very safe"
        ],
        cons: [
            "Lower potential returns compared to stocks",
            "Interest rate risk - bond prices fall when rates rise",
            "Inflation risk - returns may not keep up with inflation",
            "Credit risk - issuer may default",
            "Less liquidity than stocks for some bonds"
        ],
        considerations: [
            "Check the credit rating of the bond issuer",
            "Understand the bond's maturity date",
            "Consider interest rate trends",
            "Evaluate the yield relative to inflation",
            "Diversify across different bond types and issuers",
            "Consider bond funds for easier diversification",
            "Understand callable vs. non-callable bonds"
        ]
    },
    "mutual-funds": {
        icon: "📊",
        title: "Mutual Funds",
        description: "Mutual funds pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers.",
        pros: [
            "Professional management and expertise",
            "Instant diversification across many securities",
            "Accessible with relatively small investments",
            "Automatic reinvestment options",
            "Regulated and transparent"
        ],
        cons: [
            "Management fees and expense ratios",
            "Less control over individual holdings",
            "May have minimum investment requirements",
            "Tax implications on distributions",
            "Performance depends on fund manager's skill"
        ],
        considerations: [
            "Review the fund's expense ratio and fees",
            "Check the fund manager's track record",
            "Understand the fund's investment strategy",
            "Review historical performance (but past doesn't guarantee future)",
            "Consider index funds for lower fees",
            "Check minimum investment requirements",
            "Understand the fund's risk level and asset allocation"
        ]
    },
    etf: {
        icon: "📉",
        title: "ETFs (Exchange-Traded Funds)",
        description: "ETFs are similar to mutual funds but trade like stocks on exchanges. They typically track an index and offer diversification with lower fees than many mutual funds.",
        pros: [
            "Lower expense ratios than most mutual funds",
            "Trade throughout the day like stocks",
            "High diversification",
            "Transparent holdings",
            "Tax-efficient structure"
        ],
        cons: [
            "Trading commissions (though many brokers offer free trades)",
            "Bid-ask spreads can affect returns",
            "May tempt frequent trading",
            "Some ETFs have low trading volume",
            "Tracking error vs. underlying index"
        ],
        considerations: [
            "Check the ETF's expense ratio",
            "Verify trading volume and liquidity",
            "Understand what index or asset it tracks",
            "Review the fund's holdings and rebalancing frequency",
            "Consider tax implications",
            "Compare similar ETFs for best fit",
            "Be aware of sector-specific risks"
        ]
    },
    "real-estate": {
        icon: "🏠",
        title: "Real Estate",
        description: "Real estate investing involves purchasing property to generate rental income, capital appreciation, or both. This can include residential, commercial, or industrial properties.",
        pros: [
            "Potential for steady rental income",
            "Property value appreciation over time",
            "Tangible asset you can see and touch",
            "Tax benefits (depreciation, deductions)",
            "Hedge against inflation"
        ],
        cons: [
            "High initial investment required",
            "Illiquid - hard to sell quickly",
            "Ongoing maintenance and management costs",
            "Market fluctuations and location risk",
            "Tenant management responsibilities"
        ],
        considerations: [
            "Research the location and neighborhood trends",
            "Calculate all costs (purchase, maintenance, taxes, insurance)",
            "Understand rental market conditions",
            "Have a property management plan",
            "Consider real estate investment trusts (REITs) for easier entry",
            "Factor in vacancy rates and potential repairs",
            "Understand local real estate laws and regulations"
        ]
    },
    crypto: {
        icon: "₿",
        title: "Cryptocurrency",
        description: "Cryptocurrency is a digital or virtual currency secured by cryptography. Bitcoin and Ethereum are the most well-known examples. It operates on decentralized blockchain technology.",
        pros: [
            "Potential for very high returns",
            "24/7 market trading",
            "Decentralized and borderless",
            "Growing adoption and acceptance",
            "Portfolio diversification"
        ],
        cons: [
            "Extremely high volatility",
            "Regulatory uncertainty",
            "Security risks (hacking, scams)",
            "No government backing or insurance",
            "Technology and learning curve"
        ],
        considerations: [
            "Only invest what you can afford to lose completely",
            "Use reputable exchanges and wallets",
            "Enable two-factor authentication",
            "Understand the technology and risks",
            "Be aware of tax implications",
            "Watch out for scams and phishing",
            "Consider it a small portion of your portfolio",
            "Store crypto securely (hardware wallets for large amounts)"
        ]
    },
    "savings-accounts": {
        icon: "💰",
        title: "Savings Accounts",
        description: "Savings accounts are bank deposits that earn interest. They are FDIC insured (in the US) up to certain limits, making them one of the safest investment options.",
        pros: [
            "Very safe and FDIC insured",
            "Easy access to your money",
            "No risk of losing principal",
            "Predictable interest income",
            "Good for emergency funds"
        ],
        cons: [
            "Very low returns, often below inflation",
            "Interest rates can change",
            "Limited growth potential",
            "May have minimum balance requirements",
            "Tax on interest earned"
        ],
        considerations: [
            "Compare interest rates across banks",
            "Check for minimum balance requirements",
            "Understand FDIC insurance limits",
            "Consider high-yield savings accounts",
            "Use for emergency fund, not long-term growth",
            "Be aware of withdrawal limits",
            "Consider inflation's impact on purchasing power"
        ]
    },
    "retirement-accounts": {
        icon: "🎯",
        title: "Retirement Accounts (401k, IRA)",
        description: "Retirement accounts like 401(k)s and IRAs offer tax advantages for long-term retirement savings. They typically invest in stocks, bonds, and mutual funds.",
        pros: [
            "Tax advantages (tax-deferred or tax-free growth)",
            "Employer matching (for 401k)",
            "Automatic contributions possible",
            "Long-term compound growth",
            "Lower taxable income (traditional accounts)"
        ],
        cons: [
            "Early withdrawal penalties",
            "Limited investment options (especially 401k)",
            "Contribution limits",
            "Required minimum distributions",
            "Taxes due upon withdrawal (traditional)"
        ],
        considerations: [
            "Contribute enough to get employer match (free money!)",
            "Start early to maximize compound growth",
            "Understand Roth vs. Traditional options",
            "Review and rebalance periodically",
            "Don't withdraw early unless absolutely necessary",
            "Consider contribution limits and catch-up contributions",
            "Diversify investments within the account"
        ]
    }
};

// Chat functionality
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendButton');
const resultsContent = document.getElementById('resultsContent');

// Add message to chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `<p>${text}</p>`;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Display investment information in results pane
function displayInvestment(investmentKey) {
    const investment = investmentData[investmentKey];
    if (!investment) return;
    
    resultsContent.innerHTML = `
        <div class="investment-card">
            <div class="investment-header">
                <span class="investment-icon">${investment.icon}</span>
                <h2 class="investment-title">${investment.title}</h2>
            </div>
            
            <div class="investment-description">
                ${investment.description}
            </div>
            
            <div class="pros-cons-grid">
                <div class="pros-list">
                    <div class="section-title">✅ Pros</div>
                    <ul>
                        ${investment.pros.map(pro => `<li>${pro}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="cons-list">
                    <div class="section-title">❌ Cons</div>
                    <ul>
                        ${investment.cons.map(con => `<li>${con}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="section">
                <div class="considerations-list">
                    <div class="section-title">⚠️ Things to Consider</div>
                    <ul>
                        ${investment.considerations.map(consideration => `<li>${consideration}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    resultsContent.scrollTop = 0;
}

// Process user query
function processQuery(query) {
    const lowerQuery = query.toLowerCase();
    
    // Check for specific investment types
    const investmentKeywords = {
        'stocks': ['stock', 'equity', 'share', 'shares', 'stock market'],
        'bonds': ['bond', 'treasury', 'government bond', 'corporate bond'],
        'mutual-funds': ['mutual fund', 'mutual funds', 'fund'],
        'etf': ['etf', 'exchange-traded fund', 'exchange traded fund'],
        'real-estate': ['real estate', 'property', 'real estate investment', 'rental property', 'reit'],
        'crypto': ['crypto', 'cryptocurrency', 'bitcoin', 'ethereum', 'blockchain', 'digital currency'],
        'savings-accounts': ['savings account', 'savings', 'bank account', 'high yield savings'],
        'retirement-accounts': ['retirement', '401k', 'ira', 'roth', 'retirement account', 'pension']
    };
    
    // Find matching investment type
    for (const [key, keywords] of Object.entries(investmentKeywords)) {
        if (keywords.some(keyword => lowerQuery.includes(keyword))) {
            displayInvestment(key);
            return `Here's detailed information about ${investmentData[key].title.toLowerCase()}. Check the right pane for a comprehensive analysis!`;
        }
    }
    
    // Check for general queries
    if (lowerQuery.includes('type') && (lowerQuery.includes('investment') || lowerQuery.includes('invest'))) {
        const types = Object.values(investmentData).map(inv => inv.title).join(', ');
        return `There are several types of investments you can consider: ${types}. Ask me about any specific type to learn more!`;
    }
    
    if (lowerQuery.includes('help') || lowerQuery.includes('what can')) {
        return `I can help you learn about different investment types. Try asking about: stocks, bonds, mutual funds, ETFs, real estate, cryptocurrency, savings accounts, or retirement accounts.`;
    }
    
    // Default response
    return `I can help you learn about investments! Try asking about specific types like stocks, bonds, mutual funds, ETFs, real estate, cryptocurrency, or retirement accounts. You can also ask "What are the different types of investments?"`;
}

// Handle send button click
sendButton.addEventListener('click', () => {
    const query = chatInput.value.trim();
    if (query) {
        addMessage(query, true);
        chatInput.value = '';
        
        // Simulate thinking delay
        setTimeout(() => {
            const response = processQuery(query);
            addMessage(response);
        }, 500);
    }
});

// Handle Enter key
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

// Handle topic tag clicks
document.querySelectorAll('.topic-tag').forEach(tag => {
    tag.addEventListener('click', () => {
        const topic = tag.getAttribute('data-topic');
        const query = investmentData[topic] ? investmentData[topic].title.toLowerCase() : topic;
        chatInput.value = `Tell me about ${query}`;
        sendButton.click();
    });
});

// Initialize welcome state
displayInvestment('stocks'); // Show stocks as default example

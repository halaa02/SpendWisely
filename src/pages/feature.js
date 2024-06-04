import React from 'react';
import './App.css'; 

function Header() {
  return (
    <header>
      <h1>FEATURES</h1>
    </header>
  );
}

function Feature(props) {
  return (
    <div className="feature">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

function FeaturePage() {
  return (
    <div className="App">
      <Header />
      <section>
        <Feature
          title="Expense Tracking"
          description="Allow users to input their expenses and categorize them."
        />
      </section>
      <section>
        <Feature
          title="Budgeting Tools"
          description="Enable users to set budgets for different categories (e.g., groceries, entertainment) and receive notifications when they are close to or exceed their limits."
        />
      </section>
      <section>
        <Feature
          title="Goal Setting"
          description="Allow users to set financial goals (e.g., saving for a vacation, paying off debt) and track their progress over time."
        />
      </section>
      <section>
        <Feature
          title="Bill Reminders"
          description="Send notifications to users about upcoming bills or subscription renewals to help them avoid late payments and penalties."
        />
      </section>
      <section>
        <Feature
          title="Debt Management"
          description="Provide tools to help users manage and pay off debt more efficiently."
        />
      </section>
    </div>
  );
}

export default FeaturePage;
import React, { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [incompletePayment, setIncompletePayment] = useState(null);

  // Initialize Pi SDK when component mounts
//   useEffect(() => {
//   if (window.Pi) {
//     window.Pi.init({ 
//       version: "2.0", 
//       sandbox: true   // This is crucial for localhost testing
//     });
//   }
// }, []);

  // Handler for incomplete payments (required by Pi.authenticate)
  // const onIncompletePaymentFound = (payment) => {
  //   console.log("Incomplete payment found:", payment);
  //   setIncompletePayment(payment);
  //   // Example: Send to your backend to handle (cancel/complete)
  //   // fetch('/payment/complete', { method: 'POST', body: JSON.stringify({ ... }) });
  // };

  // Authenticate the user
  // const authenticateUser = async () => {
  //   const scopes = ['username', 'payments'];

  //   try {
  //     const auth = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
  //     console.log("Authenticated successfully:", auth);
  //     setUser(auth.user); // auth.user contains username, uid, etc.
  //     setAuthError(null);
  //   } catch (error) {
  //     console.error("Authentication error:", error);
  //     setAuthError(error);
  //   }
  // };

  // Call authenticate on mount or on button click
  // useEffect(() => {
  //   authenticateUser();
  // }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>My Pi App</h1>

      {/* {authError && <p style={{ color: 'red' }}>Error: {authError.message || authError}</p>}

      {incompletePayment && (
        <p>Incomplete payment detected! ID: {incompletePayment.identifier}</p>
      )} */}

      {user ? (
        <div>
          <p>Hello, <strong>{user.username}</strong>! You're ready to make payments.</p>
          {/* Add your payment button here (see Step 8) */}
        </div>
      ) : (
        <p>Authenticating with Pi...</p>
      )}
    </div>
  );
}

export default App;
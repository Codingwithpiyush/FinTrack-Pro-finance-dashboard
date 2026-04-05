import { useState, useEffect } from "react";

export default function Transactions({ role }) {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 FETCH DATA FROM BACKEND
  useEffect(() => {
    fetch("http://localhost:5000/transactions")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, []);

  // 🔹 ADD TRANSACTION
  const addTransaction = () => {
    const newTx = {
      name: "New User",
      amount: Math.floor(Math.random() * 500),
      category: "Food",
    };

    fetch("http://localhost:5000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTx),
    })
      .then((res) => res.json())
      .then((data) => setTransactions([...transactions, data]));
  };

  // 🔹 DELETE TRANSACTION
  const deleteTransaction = (id) => {
    fetch(`http://localhost:5000/transactions/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTransactions(transactions.filter((t) => t.id !== id));
    });
  };

  // 🔹 SEARCH FILTER
  const filteredData = transactions.filter((t) =>
    t.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="transactions">
      <h3>Latest Transactions</h3>

      {/* 🔹 ADD BUTTON (ADMIN ONLY) */}
      {role === "admin" && (
        <button className="add-btn" onClick={addTransaction}>
          + Add Transaction
        </button>
      )}

      {/* 🔹 SEARCH */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔹 TABLE */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Amount</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.name}</td>
                <td>{t.category}</td>
                <td>${t.amount}</td>

                {role === "admin" && (
                  <td>
                    <button onClick={() => deleteTransaction(t.id)}>
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
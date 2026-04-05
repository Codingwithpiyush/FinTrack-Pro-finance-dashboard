export default function DebitCard() {
  return (
    <div className="debit-card">
      <div className="card-top">
        <span className="bank">FinTrack</span>
        <span className="visa">VISA</span>
      </div>

      <div className="chip">💳</div>

      <div className="card-number">
        **** **** **** 3456
      </div>

      <div className="card-bottom">
        <div>
          <p>Card Holder</p>
          <h4>Piyush</h4>
        </div>

        <div>
          <p>Expires</p>
          <h4>12/28</h4>
        </div>
      </div>
    </div>
  );
}
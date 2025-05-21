function Notification({ hasNewMessages }) {
  return (
    <div>
        <h2>Inbox</h2>
      {hasNewMessages && <p>You have new messages!</p>}
      {hasNewMessages && <p>fariima aya kuyala!</p>}
    </div>
  );
}
export default Notification;
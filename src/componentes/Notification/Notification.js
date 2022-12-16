import { useState } from "react";
import Notifications from "react-notifications-menu";
import "./Notification.css";

const DEFAULT_NOTIFICATION = {
  image:
    "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
  message: "Notification one.",
  detailPage: "/events",
  receivedTime: "12h ago"
};
export default function NotificationMenu() {
  const [data, setData] = useState([DEFAULT_NOTIFICATION]);
  const [message, setMessage] = useState("");

  const handleOnClick = () => {
    if (message.length > 0) {
      setData([
        ...data,
        {
          ...DEFAULT_NOTIFICATION,
          message
        }
      ]);
      setMessage("");
      alert("notification added");
    }
  };

  return (
    <div className="App">
      <div style={{ marginLeft: "50%", marginBottom: 100, marginTop: "10%" }}>
        <Notifications
          data={data}
          header={{
            title: "Notifications",
            option: { text: "View All", onClick: () => handleOnClick()  }
          }}
          markAsRead={(data) => {
            console.log(data);
          }}
        />
      </div>
    </div>
  );
}

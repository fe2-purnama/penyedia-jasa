import React from "react";
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-section">
        <h3>Profile Settings</h3>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="settings-section">
        <h3>Notification Settings</h3>
        <form>
          <div className="form-group">
            <label htmlFor="email-notifications">Email Notifications</label>
            <select id="email-notifications" name="email-notifications">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="sms-notifications">SMS Notifications</label>
            <select id="sms-notifications" name="sms-notifications">
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>

      <div className="settings-section">
        <h3>Preferences</h3>
        <form>
          <div className="form-group">
            <label htmlFor="language">Language</label>
            <select id="language" name="language">
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="theme">Theme</label>
            <select id="theme" name="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;

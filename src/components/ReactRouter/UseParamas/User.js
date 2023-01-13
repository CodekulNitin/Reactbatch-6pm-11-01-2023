import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [searchParams, setSerachParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <div>
      <div>
        <Outlet />
        <div className="flex space-x-2">
          <button
            className="border rounded p-2 "
            onClick={() => {
              setSerachParams({ filter: "active" });
              console.log("hiiiiiii");
            }}
          >
            Active Users
          </button>
          <button
            className="border rounded p-2 "
            onClick={() => setSerachParams({})}
          >
            Reset Filter
          </button>
        </div>
      </div>
      <div>
        {showActiveUsers ? (
          <div>
            <label>Active Users</label>
            <h2>User3</h2>
          </div>
        ) : (
          <div>
            <label>All Users</label>

            <h2>User1</h2>
            <h2>User2</h2>
            <h2>User3</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default User;

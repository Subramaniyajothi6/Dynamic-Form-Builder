import { getUserRole } from "../utils/auth";

const InstructionBanner = () => {
  const role = getUserRole();

  if (!role) {
    return (
      <div className="bg-yellow-100 text-yellow-900 px-4 py-2 text-sm">
        Please login to fill forms or manage them.
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="bg-blue-100 text-blue-900 px-4 py-2 text-sm">
        You are logged in as <b>admin</b>. Use the Admin menu to create forms and view responses.
      </div>
    );
  }

  return (
    <div className="bg-green-100 text-green-900 px-4 py-2 text-sm">
      You are logged in as <b>user</b>. Go to “Forms” to fill available forms.
    </div>
  );
};

export default InstructionBanner;

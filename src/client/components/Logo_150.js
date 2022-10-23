import "./style/navbar.css";

export default function Logo_150({ setPage }) {
  const handlePageChange = (e) => {
    setPage(e.target.value);
  };

  return (
    <a
      onClick={(e) => {
        handlePageChange(e);
      }}
    >
      <img
        value={4}
        src="https://via.placeholder.com/150"
        className="navbar-logo"
      />
    </a>
  );
}

import { useLocation, Link } from "react-router-dom";

function BreadCrumps() {
  const crumbsArr = [];
  const location = useLocation().pathname.slice(1);

  const crumbs = location.split("/").map((crumb) => {
    crumbsArr.push(crumb);
    return (
      <div className="crumb" key={crumb}>
        <Link to={crumbsArr.join("/")}>{crumb}</Link>
      </div>
    );
  });
  console.log(crumbsArr);
  return <div className="align-element flex">{crumbs}</div>;
}

export default BreadCrumps;

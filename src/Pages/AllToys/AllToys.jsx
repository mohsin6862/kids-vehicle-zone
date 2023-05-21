import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import Swal from 'sweetalert2';

const AllToys = () => {
  const toys = useLoaderData();
  const { user } = useContext(AuthContext);
  useTitle('All Toys');
  const [sortedToys, setSortedToys] = useState(toys);
  const [filterOption, setFilterOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [totalToys, setTotalToys] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Change this value according to your desired number of items per page

  useEffect(() => {
    fetch('https://toy-shop-server-umber.vercel.app/total-toys')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTotalToys(data);
      });
  }, []);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentToys = sortedToys.slice(indexOfFirstItem, indexOfLastItem);
    setSortedToys(currentToys);
  }, [currentPage]);

  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const handleHigh = () => {
    const sorted = [...toys].sort((a, b) => b.price - a.price);
    setSortedToys(sorted);
    setFilterOption('highToLow');
    setCurrentPage(1);
  };

  const handleLow = () => {
    const sorted = [...toys].sort((a, b) => a.price - b.price);
    setSortedToys(sorted);
    setFilterOption('lowToHigh');
    setCurrentPage(1);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredToys = toys.filter((toy) =>
      toy.name.toLowerCase().includes(query)
    );
    setSortedToys(filteredToys);
    setCurrentPage(1);
  };

  const handleView = () => {
    Swal.fire({
      title: 'Warning',
      text:
        'To see view details you have to login first. If you are already logged in, please ignore this warning.',
      type: 'success',
      icon: 'warning',
      confirmButtonText: 'Done',
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
      <div className="flex justify-center my-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`mx-1 ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300'
            } rounded-md px-3 py-1`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-amber-600 text-center my-12">All toys </h1>

      <div className="my-8">
        <button onClick={handleHigh} className="btn btn-sm">
          Price High
        </button>
        <button onClick={handleLow} className="btn btn-sm ml-5">
          Price Low
        </button>
      </div>

      <div className="my-8">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 border border-gray-300 rounded-md"
        />
      </div>

      {sortedToys.map((toy) => (
        <div className="overflow-x-auto w-full" key={toy._id}>
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Name</th>
                <th>Seller information</th>
                <th>Price</th>
                <th>Ratings</th>
                <th>Details</th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={toy?.photo} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{toy?.name}</div>
                      <div className="text-sm opacity-50">{toy?.title}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {toy?.yourname}
                  <br />
                  <span className="badge badge-ghost badge-sm">{toy?.email}</span>
                </td>
                <td>{toy?.price} bdt</td>
                <td>{toy?.ratings} Star</td>
                <td>
                  <Link to={`/view/${toy?._id}`}>
                    <button onClick={handleView} className="btn btn-primary">View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}

      {renderPagination()}
    </div>
  );
};

export default AllToys;

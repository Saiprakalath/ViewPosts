import React from "react";

interface PropsType {
  loading: any;
  details: any;
}

export const DetailsTable: React.FC<PropsType> = ({ details, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Body</th>
        </tr>
      </thead>
      <tbody>
        {details.map((post: any) => (
          <tr key={post.id} data-testid="testdata">
            <td className="text-dark" data-testid={`testDataId-${post.id}`}> {post.id}</td>
            <td className="text-dark" data-testid={`testDataLength-${post.id}`}> {post.title}</td>
            <td className="text-dark" data-testid={`testdataBody-${post.id}`}> {post.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

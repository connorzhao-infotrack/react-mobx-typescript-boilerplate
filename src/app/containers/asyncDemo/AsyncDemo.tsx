import * as React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query';

const queryClient = new QueryClient({});

export const AsyncDemo = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RepoList />
    </QueryClientProvider>
  );
};

export const RepoList = () => {
  const { isLoading, isError, data, error, refetch } = useQuery(['repo'], () =>
    fetch('https://api.github.com/users/eunit99/repos').then((res) => {
      console.log(res);
      return res.json();
    })
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>An error has occurred:</h1>;

  console.log(data);

  return (
    <>
      {data.map((repo) => {
        return (
          <React.Fragment key={repo.id}>
            <ul>
              <li>
                <a href={repo.clone_url}>{repo.name}</a>
              </li>
            </ul>
          </React.Fragment>
        );
      })}
      <button type="button" onClick={async () => await refetch()}>
        Fetch again
      </button>
    </>
  );
};

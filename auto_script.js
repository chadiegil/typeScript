var date = new Date();

// Get the current month and year
let currentMonth = date.getMonth() + 1;
let currentYear = date.getFullYear();

// Set the account information
let username = "yourGithubUsername";
let password = "yourGithubPassword";


// Update the commits for the current month
await octokit.repos.createCommit({
  owner: username,
  repo: "your_repo_name",
  date: `${currentYear}-${currentMonth}-12T13:55:36Z`,
  message: "Commited by ChatGPT!",
});

const octokit = require('@octokit/rest')()

// define and call an async function
const runScript = async () => {
  await octokit.repos.createCommit({
    owner: 'owner',
    repo: 'repo',
    ...
  })
}
runScript()

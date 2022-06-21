import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const githubToken = core.getInput("GITHUB_TOKEN");
  const octoKit = github.getOctokit(githubToken);

  const { context } = github;
  const { pull_request } = context.payload;

  await octoKit.rest.issues.createComment({
    owner: context.payload.repository?.owner.login ?? "",
    repo: context.payload.repository?.name ?? "",
    issue_number: pull_request?.number ?? 0,
    body: "Thank your for submit a new Pull Request! we will try to review it as soon as we can",
  });
}

run();

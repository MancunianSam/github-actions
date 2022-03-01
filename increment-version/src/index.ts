import { getInput, setOutput, setFailed } from "@actions/core"
import { Octokit } from "@octokit/rest";

const repo = getInput("repo_name")
const octokit = new Octokit()

octokit.repos.listTags({repo, owner: "nationalarchives"}).then(res => {
  setOutput("next_version", `v${parseInt(res.data[0].name.slice(1)) + 1}`)
}).catch(err => setFailed(err))

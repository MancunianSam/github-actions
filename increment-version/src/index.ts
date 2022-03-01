import { getInput, setOutput, setFailed } from "@actions/core"
import axios from "axios";
import { Octokit } from "@octokit/rest";
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";

const repoName = getInput("repo_name")
const octokit = new Octokit()
type ListTagsResponseType = GetResponseTypeFromEndpointMethod<typeof octokit.repos.listTags>;

axios.get<ListTagsResponseType>(`https://api.github.com/repos/nationalarchives/tdr-${repoName}/tags`).then(res => {
  console.log(res.data.data)
  setOutput("next_version", (parseInt(res.data.data[0].name) + 1).toString())
}).catch(err => setFailed(err))

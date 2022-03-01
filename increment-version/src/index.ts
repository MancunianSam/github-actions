import { getInput, setOutput, setFailed } from "@actions/core"
import { context } from "@actions/github"
import axios from "axios";
import { Octokit } from "@octokit/rest";
import { GetResponseTypeFromEndpointMethod } from "@octokit/types";

const repoName = getInput("repo_name")
const octokit = new Octokit()
type ListTagsResponseType = GetResponseTypeFromEndpointMethod<typeof octokit.repos.listTags>;

axios.get<ListTagsResponseType>(`${context.apiUrl}/repos/nationalarchives/tdr-${repoName}/tags`).then(res => {
  setOutput("next_version", (parseInt(res.data.data[0].name) + 1).toString())
}).catch(err => setFailed(err))

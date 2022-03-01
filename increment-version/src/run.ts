import {getInput, setFailed, setOutput} from '@actions/core'
import {Octokit} from '@octokit/rest'

export async function run(): Promise<void> {
  const octokit = new Octokit()
  const repo = getInput('repo_name')
  try {
    const {data} = await octokit.repos.listTags({
      repo,
      owner: 'nationalarchives'
    })
    const nextVersion = `v${parseInt(data[0].name.slice(1)) + 1}`
    setOutput('next_version', nextVersion)
  } catch (err) {
    setFailed((err as Error).message)
  }
}

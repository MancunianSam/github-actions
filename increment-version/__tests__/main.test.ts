import {expect, test, jest} from '@jest/globals'
import * as core from '@actions/core'
import nock from 'nock'
import {run} from '../src/run'

nock('https://api.github.com')
  .get('/repos/nationalarchives/test-repo/tags')
  .reply(200, [{name: 'v1'}])

test('test runs', async () => {
  process.env['INPUT_REPO_NAME'] = 'test-repo'
  const setOutputMock = jest.spyOn(core, 'setOutput')
  await run()
  expect(setOutputMock).toHaveBeenCalledWith('next_version', 'v2')
})

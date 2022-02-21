import { getInput, setFailed } from "@actions/core"
import { IncomingWebhook } from "@slack/webhook"

const text = getInput('message')
const channel = getInput('channel')

function run(url: string) {
  const webhook = new IncomingWebhook(url);
  webhook.send({
    text,
    channel
  }).catch(err => {
    setFailed(err.message)
  })
}

run(process.env["SLACK_WEBHOOK"])
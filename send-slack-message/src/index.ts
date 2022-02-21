import {getInput, setFailed} from "@actions/core"
import {IncomingWebhook} from "@slack/webhook"

const icon_emoji = getInput('icon')
const text = getInput('message')
const channel = getInput('channel')
const webhook = new IncomingWebhook(process.env["SLACK_WEBHOOK"]);

function run() {
  webhook.send({
    text,
    channel,
    icon_emoji
  }).catch(err => {
    setFailed(err.message)
  })
}

run()
# Send slack message action
This action sends a slack message to the specified channel

## Inputs

#### `message`  
**Required** The slack message
#### `icon`  
**Required** The emoji name to be used as an icon
#### `channel`  
**Required** The channel name to send the message to

## Example usage
```yaml
    uses: MancunianSam/github-actions/send-slack-message@{ref}@v1.0
    with:
      message: 'Hello Slack'
      icon: ':white_check_mark:'
      channel: '#my-channel'
```

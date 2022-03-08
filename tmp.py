import requests
res = requests.post("https://api.github.com/repos/nationalarchives/tdr-e2e-tests/actions/workflows/ci.yml/dispatches", json={"environment": "intg"})
print(res)


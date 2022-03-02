git clone https://github.com/awslabs/git-secrets.git
make install -C git-secrets
git-secrets --register-aws --global
git-secrets --add --global '([^0-9])*[0-9]{12}([^0-9])*'
git-secrets --add --global --allowed '1234'
git-secrets --scan
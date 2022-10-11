sam build

docker run -d -p 8000:8000 amazon/dynamodb-local

AWS_PAGER="" aws dynamodb create-table \
--table-name FavoritesTable \
--attribute-definitions AttributeName=ID,AttributeType=S \
--key-schema AttributeName=ID,KeyType=HASH \
--endpoint-url http://localhost:8000 \
--billing-mode PAY_PER_REQUEST

AWS_PAGER="" aws dynamodb create-table \
--table-name UsersTable \
--attribute-definitions AttributeName=ID,AttributeType=S \
--key-schema AttributeName=ID,KeyType=HASH \
--endpoint-url http://localhost:8000 \
--billing-mode PAY_PER_REQUEST

sam local start-api & vite
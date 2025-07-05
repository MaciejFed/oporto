RESPONSE=$(curl -H 'Authorization: Bearer 7B008FE3-B74D-4C70-B63B-AB2790E20D95' http://localhost:3000/portuguese/in-progress | jq .)


header=$(echo "$RESPONSE" | jq -r '.header')
body=$(echo "$RESPONSE" | jq -r '.body')
example=$(echo "$RESPONSE" | jq -r '.example')

# Use the variables in a POST request
curl -X POST "https://api.pushover.net/1/messages.json" \
  -H "Content-Type: application/json" \
  -d "{\"token\": \"az9487tia8hd2gwc7f4s3z6q9d3czc\", \"user\": \"upog9zsfzmzog2rkaguko9ri669taq\", \"message\": \"- $body\n- $example\", \"title\": \"$header\"}"

export NODE_OPTIONS=--max-old-space-size=8048

until npm run examples; do
    echo "Command failed. Retrying in 5 seconds..."
    sleep 5
done

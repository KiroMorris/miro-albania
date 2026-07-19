# Deploying to your VPS

Node.js 20+ required.

## 1. Build & run

```bash
git clone <your-repo> discover-albania && cd discover-albania
npm ci
npm run build

# The AI chat needs an Anthropic API key (get one at platform.claude.com):
export ANTHROPIC_API_KEY=sk-ant-...

npm run start -- -p 3000
```

Everything except `/api/chat` works without the key — the chat page will just
show a "not configured" message until it's set.

## 2. Keep it running (pm2)

```bash
npm install -g pm2
ANTHROPIC_API_KEY=sk-ant-... pm2 start npm --name albania -- run start -- -p 3000
pm2 save && pm2 startup   # survive reboots
```

## 3. Nginx for the subdomain

```nginx
server {
    listen 80;
    server_name albania.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        # streaming chat responses:
        proxy_buffering off;
    }
}
```

Then `certbot --nginx -d albania.yourdomain.com` for HTTPS.

`proxy_buffering off` matters — without it nginx buffers the AI chat stream
and replies arrive all at once instead of typing out.

## 4. Updating content

All the guide content lives in `content/`:

- `content/places.ts` — every place (also feeds the map pins and the AI)
- `content/itineraries.ts` — the three day-by-day routes
- `content/guide.ts` — survival guide + phrases

Edit, `npm run build`, `pm2 restart albania`. The AI chat system prompt is
generated from these same files, so it always knows the current content.

# Configuración de Nginx - Reverse Proxy

Este directorio contiene la configuración de Nginx para servir múltiples landing pages desde un solo servidor.

## Estructura

```
nginx/
├── nginx.conf      # Configuración principal
├── ssl/            # Certificados SSL (crear manualmente)
└── README.md       # Este archivo
```

## Uso Básico

El Nginx reverse proxy permite:

1. **Servir múltiples dominios** desde un solo servidor
2. **Balanceo de carga** entre contenedores
3. **SSL/TLS termination** con Let's Encrypt
4. **Compresión gzip** automática
5. **Logging centralizado**

## Configuración por Dominio

### 1. Agregar un nuevo landing page

Edita `nginx.conf` y agrega un nuevo bloque `server`:

```nginx
server {
    listen 80;
    server_name micliente.com www.micliente.com;

    location / {
        proxy_pass http://landing-2:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 2. Agregar el servicio en docker-compose.multi.yml

```yaml
landing-2:
  build:
    context: ../landing-cliente-a
    dockerfile: Dockerfile
  container_name: landing-2-cliente-a
  ports:
    - "3002:3000"
  environment:
    - NODE_ENV=production
  networks:
    - multi-landing-network
```

### 3. Reiniciar Nginx

```bash
docker compose -f docker-compose.multi.yml restart nginx
```

## SSL/HTTPS con Let's Encrypt

### 1. Instalar Certbot

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

### 2. Obtener certificado

```bash
sudo certbot --nginx -d micliente.com -d www.micliente.com
```

### 3. Copiar certificados

```bash
mkdir -p nginx/ssl
sudo cp /etc/letsencrypt/live/micliente.com/fullchain.pem nginx/ssl/micliente.com.crt
sudo cp /etc/letsencrypt/live/micliente.com/privkey.pem nginx/ssl/micliente.com.key
```

### 4. Actualizar nginx.conf

Descomenta la sección SSL y ajusta las rutas de los certificados.

## Troubleshooting

### Ver logs de Nginx

```bash
docker compose -f docker-compose.multi.yml logs nginx
```

### Verificar configuración

```bash
docker compose -f docker-compose.multi.yml exec nginx nginx -t
```

### Recargar configuración sin downtime

```bash
docker compose -f docker-compose.multi.yml exec nginx nginx -s reload
```

## Ejemplo de Configuración Completa

Para 3 landing pages con dominios diferentes:

```nginx
# Landing 1 - cliente-a.com
server {
    listen 80;
    server_name cliente-a.com www.cliente-a.com;
    location / {
        proxy_pass http://landing-1:3000;
    }
}

# Landing 2 - cliente-b.com
server {
    listen 80;
    server_name cliente-b.com www.cliente-b.com;
    location / {
        proxy_pass http://landing-2:3000;
    }
}

# Landing 3 - cliente-c.com
server {
    listen 80;
    server_name cliente-c.com www.cliente-c.com;
    location / {
        proxy_pass http://landing-3:3000;
    }
}
```

## Recursos

- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Certbot](https://certbot.eff.org/)

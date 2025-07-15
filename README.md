# Auth Service

This service is responsible for user authentication and token generation.

## Configuration

Create a `.env` file in the root of the project and add the following environment variables:

```
JWT_SECRET=
JWT_EXPIRATION=
USER_CLIENT_HOST=
USER_CLIENT_PORT=
```

An example file is provided in `.env.example`.

## Running the service

To run the service, use the following commands:

```bash
npm install
npm run start
```

The service will be running on port 3000 and will be connected to the user service on the host and port specified in the `.env` file.
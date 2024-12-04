# Archipel Demo Site

Our first demo with a simple landing page and Pizza flow.

## Screenshot

<img width="550" alt="image" src="https://github.com/user-attachments/assets/02ad0aa0-3d07-4a64-9515-737f19d22486">

## How to Use

### Install dependencies

* Make sure to install `nvm` and use the correct version of `node`:

```bash
nvm use
```

* You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

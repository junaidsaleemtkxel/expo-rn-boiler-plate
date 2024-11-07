module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"], // Assuming your source files are in the 'src' folder
          alias: {
            "@": "./", // Alias '@' to point to 'src' folder
          },
        },
      ],
    ],
  };
};

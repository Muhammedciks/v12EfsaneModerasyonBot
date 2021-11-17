module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`m+yardım | Made By İn MuhammedinKs`, {
    type: "STREAMING",
  });
};

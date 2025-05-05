export default async function handler(req, res) {
  const { trustedData, untrustedData } = req.body;
  const action = untrustedData?.buttonIndex;
  const user = trustedData?.fid;
  const tokenAddress = untrustedData?.inputText;

  console.log('Webhook:', { user, action, tokenAddress });
  // TODO: Implement smart contract calls or DB logic

  return res.status(200).json({ message: 'Processed' });
}
import axios from 'axios'

export default async function subscribe (req, res) {
  // const apiKey = process.env.CONVERTKIT_API_KEY
  const apiKey = 't6LlJQM-iWgsEXhhT8FDPw'

  const { form_id, email, tags } = req.body

  console.log({
    api_key: apiKey,
    email: email,
    tags: tags,
    form_id,
  })
  axios
    .post(`https://api.convertkit.com/v3/forms/${form_id}/subscribe`, {
      api_key: apiKey,
      email,
      tags,
    })
    .then(response => {
      console.log('response', response.data)
      res.status(204).end()
    })
    .catch(err => {
      console.log('error in request', err.response.data)
      res.status(400).send({ message: 'Something went wrong' })
    })
}

let accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5NTc2OTMzMywianRpIjoiNDg1OWU4YjYtZGVhYi00NmVjLWExNzQtYzVjNWFkYTJjZTNhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IlJhbmdlcnMgMTI3IFNxdWFkIiwibmJmIjoxNjk1NzY5MzMzLCJleHAiOjE3MjczMDUzMzN9.3WIf9O6tcPiacqLIvXZPkTv2Awrkya9Tb0K5ygW_-Fc" //our backend access_token from flask
let userId = localStorage.getItem('token') // our users signed into React, this is their userId



export const serverCalls = {

    getShop: async () => {

        const response = await fetch(`https://rangers127-carinventory.onrender.com/api/shop`, {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${accessToken}`
            }
        });

        console.log(response)

        if (!response.ok) {
            throw new Error('Failed to fetch data'), response.status  //error message & status code
        }

        return await response.json()
    }
}
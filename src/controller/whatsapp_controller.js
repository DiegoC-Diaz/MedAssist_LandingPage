const sendMessage = async (formData) => {
  try {
    const response = await fetch("http://127.0.0.1:5001/api/send-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    const data = await response.json();
    console.log("Message sent successfully:", data);
    return data;
  } catch (error) {
    console.error("Error sending message:", error);
  }
};


export{sendMessage}

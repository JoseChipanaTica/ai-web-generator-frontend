export default async function handler(req, res) {
  const sampleData = {
    sectionOne: {
      title: "Welcome to Our Restaurant",
      subtitle: "Serving the finest food since 2000",
    },
    sectionTwo: {
      title: "Our Menu",
      subtitle: "A variety of dishes made with the freshest ingredients",
    },
    sectionThree: {
      title: "Special Offers",
      subtitle: "Check out our weekly deals and discounts",
    },
    sectionFour: {
      title: "About Us",
      subtitle: "Learn more about our story and passion for food",
    },
    sectionFive: {
      title: "Contact Us",
      subtitle: "Get in touch or book a table",
    },
  };
  const { idea } = req.query;

  console.log(idea);

  try {
    // Perform your API call or logic here using the "idea" query parameter
    // For now, I'll use dummy data as an example

    res.status(200).json(sampleData);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while processing your request" });
  }
}

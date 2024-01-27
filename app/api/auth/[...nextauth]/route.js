// import clientPromise from "@/libs/mongoClient";
// import nextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   adapter: MongoDBAdapter(clientPromise),
//   session: {
//     strategy: "jwt",
//   },
//   pages: {
//     signIn: "/",
//   },
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
// };

// const handler = nextAuth(authOptions);

// export { handler as GET, handler as POST };

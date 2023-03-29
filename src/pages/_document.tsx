import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
// Document.getInitialProps = async (ctx: DocumentContext) => {
//   const stSheet = new ServerStyleSheet();
//   const originalRenderPage = ctx.renderPage;

//   try {
//     ctx.renderPage = () =>
//       originalRenderPage({
//         enhanceApp: (App) => (props) =>
//           stSheet.collectStyles(<App {...props} />),
//       });

//     const initialProps: any = await Document.getInitialProps(ctx);

//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {stSheet.getStyleElement()}
//         </>
//       ),
//     };
//   } finally {
//     stSheet.seal();
//   }
// };

// import Document, { DocumentContext } from "next/document";
// import { ServerStyleSheet } from "styled-components";

// export default class MyDocument extends Document {
//   static async getInitialProps(ctx: DocumentContext) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;

//     try {
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App) => (props) =>
//             sheet.collectStyles(<App {...props} />),
//         });

//       const initialProps = await Document.getInitialProps(ctx);
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
// }

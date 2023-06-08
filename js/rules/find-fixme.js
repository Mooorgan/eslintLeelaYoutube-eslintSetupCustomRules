module.exports = {
  create(context) {
    console.log(context.options);
    // console.log(typeof context.options);
    // function findComments(comment, node) {
    function findComments(comment) {
      // if (comment.value.toLowerCase().indexOf('fixme') !== -1) {
      //   // context.report(node, 'FIXME is not allowed in comments');
      //   context.report(comment, 'FIXME is not allowed in comments');
      // }
      // if (comment.value.toLowerCase().indexOf('todo') !== -1) {
      //   context.report(comment, 'TODO is not allowed in comments');
      // }
      // console.log(comment);
      if (context.options.indexOf(comment.value.toLowerCase()) !== -1) {
        context.report(
          comment,
          `${comment.value} is not allowed in the comments`
        );
      }
    }
    return {
      Program(node) {
        let sourceCode = context.getSourceCode();
        const comments = sourceCode.getAllComments();
        for (let comment of comments) {
          findComments(comment);
        }
      },
    };
  },
};

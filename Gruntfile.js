module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),

    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>',
        secretAccessKey: '<%= aws.AWSSecretKey %>',
      },
      dist: {
        options: {
          bucket: 'eb-front-end-capstone',
        },
        files: [
          {
            expand: true,
            cwd: 'public/',
            src: ['**'],
            dest: '/',
          },
        ],
      },
    },

  });

  grunt.registerTask('deploy', 'aws_s3:dist');

  grunt.registerTask('speak', () => console.log('hello from grunt'));
};

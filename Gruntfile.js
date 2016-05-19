module.exports = function( grunt ){
    grunt.loadNpmTasks('grunt-babel');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                plugins: ['transform-react-jsx'],
                presets: ['es2015', 'react']
            },
            jsx: {
                files: [{
                    expand: true,
                    cwd: './jsx',
                    src: ['*.jsx'],
                    dest: './js',
                    ext: '.js'
                }]
            }
        }
    });

    grunt.registerTask('react', ['babel']);
};

module.exports = function (grunt) {
    // Configure grunt
    grunt.initConfig({
        sprite:{
            all: {
                src: 'assets/images/*.png',
                dest: 'assets/images/spritesheet.png',
                destCss: 'assets/styles/sprites.scss'
            }
        }
    });

    // Load in `grunt-spritesmith`
    grunt.loadNpmTasks('grunt-spritesmith');
};

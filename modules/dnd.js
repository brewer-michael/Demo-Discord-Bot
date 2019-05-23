const pool = require('./commands/postgres.js')


pool.connect( (err, client, done) => {
        if(err) {
          console.log(err)
        }else
        console.log('Connected to database');
        client.query('create table if not exists dndchars( \
            id text primary key, \
            name text, \
            race text, \
            type text, \
            level integer default 1, \
            proficiency integer default 0, \
            strength integer default 0, \
            dexterity integer default 0, \
            constitution integer default 0, \
            wisdom integer default 0, \
            charisma integer default 0, \
            hp integer default 0, \
            initiative integer default 0, \
            armor integer default 0, \
            speed integer default 0, \
            skills text, \
            p_l text, \
            senses text, \
            defenses text, \
            conditions text, \
            actions text, \
            equipment text, \
            features text, \
            creatures text, \
             default 0)', (err, result) => {
                //disconnent from database on error
                done();
                if (err) {
                        throw err;
                }
        });
});

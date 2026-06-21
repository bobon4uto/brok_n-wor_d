import os
def read_file(filename):
    with open(filename, "r", encoding="utf-8") as f:
        text = f.read()
        return text

template = read_file("src/stage_template.html")

def convert_file(filename, n):

    if os.path.exists("src/"+ filename) and os.path.isfile("src/"+filename):
        pass
    else:
        print(filename +" not found")
        return
    src = read_file("src/" + filename)
    split_src = src.split("!!CODE");
    if len(split_src) != 2:
        print("ERROR: Unsupported file")
        print("NOTE: use one '!!CODE'")
        exit(1)

    if n-1 == 0:
        templ_back = template.replace("stageNUMB.t.js.html","index.html" )
    else:
        templ_back = template.replace("NUMB",str(n-1) )
    templ_next = templ_back.replace("NUMN",str(n+1) )
    templ_mark = templ_next.replace("!!MARK",split_src[0])
    templ = templ_mark.replace("!!CODE",split_src[1])

    with open("build/" + filename + ".html", "w", encoding="utf-8") as f:
        f.write(templ)


for i in range(1,12 ):
    convert_file("stage"+str(i)+".t.js", i);
